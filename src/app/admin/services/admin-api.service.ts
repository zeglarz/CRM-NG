import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Injectable()
export class AdminApiService extends ApiService {

  constructor() {
    super();
  }

  public fetch(data: string): string {
    return 'Lorem ipsum';
  }
}
