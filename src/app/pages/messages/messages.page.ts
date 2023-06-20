import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  logs: any[] = [];

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.getLogsFromServer();
    setInterval(() => {
      this.getLogsFromServer();
    }, 5000);
  }

  async getLogsFromServer() {
    try {
      const response = await this.getLogs();
      this.logs = response;
    } catch (error) {
      console.error('Ошибка при получении данных с сервера:', error);
    }
  }

  async presentAlert(errorCode: string) {
    const error = this.getErrorByCode(errorCode);
    if (!error) {
      return;
    }

    const alert = await this.alertController.create({
      header: `Ошибка ${errorCode}`,
      subHeader: error.title,
      message: error.description,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getErrorByCode(errorCode: string) {
    const errors = [
      { code: '16', title: 'Зажатие', description: 'Необходима техподдержка компании - производителя' },
      { code: '10', title: 'Перегрев', description: 'Остановите работу на время, проверьте работоспособность в холостом режиме' },
      { code: '8', title: 'Падение скорости', description: 'Проверьте количество стружки на конвейерной ленте' },
      { code: '6', title: 'Уменьшение тока', description: 'Отрегулируйте настройки комплекса и проверьте количество стружки' },
      { code: '12', title: 'Увеличение тока', description: 'Отрегулируйте настройки комплекса и проверьте количество стружки' },
    ];

    return errors.find((error) => error.code === errorCode);
  }

  async getLogs(id_machine = 1) {
    try {
      const response = await axios.get(`https://api-aggregate.s-k56.ru/api/get-logs?id_machine=${id_machine}`);
      console.log('Успешный ответ от сервера:', response.data);
      const logs = response.data;
      const errorLogs = logs.filter((log) => this.isError(log.report));
      return errorLogs;
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      return [];
    }
  }

  isError(report: number) {
    return ['16', '10', '8', '6', '12'].includes(report.toString());
  }

  getErrorTitle(errorCode: string) {
    const error = this.getErrorByCode(errorCode);
    return error ? `${error.title.charAt(0).toUpperCase()}${error.title.slice(1).toLowerCase()}` : '';
  }

  getButtonColor(report: number) {
    switch (report.toString()) {
      case '16':
        return 'orange';
      case '10':
        return 'red';
      case '8':
        return 'yellow';
      case '6':
        return 'gray';
      case '12':
        return 'blue';
      default:
        return '';
    }
  }
}
