import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  editId: number = null;

  deleteId: number = null;

  constructor(
  ) {

  }

  setEditId(id) {
    this.editId = id;
  }

  setDeleteId(id) {
    this.deleteId = id;
  }

  getEditId() {
    return this.editId;
  }

  getDeleteId() {
    return this.deleteId;
  }

}