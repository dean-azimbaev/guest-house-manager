import {
  CreateParams,
  DataProvider,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
} from "react-admin";
import axios from "axios";
import { AppConfig } from "../config";

class CustomDataProvoder implements DataProvider {
  private apiUrl: string;
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getList(resource: string, params: GetListParams) {
    const { data } = await axios.get(`${this.apiUrl}/${resource}`);
    return {
      data,
      total: data.length,
    };
  }

  async getOne(resource: string, params: GetOneParams) {
    const { data } = await axios.get(`${this.apiUrl}/${resource}/${params.id}`);
    return { data };
  }

  async getMany(resource: string, params: GetManyParams) {
    const { data } = await axios.get(`${this.apiUrl}/${resource}`);
    return { data };
  }

  async getManyReference(resource: string, params: GetManyReferenceParams) {
    const { data } = await axios.get(`${this.apiUrl}/${resource}`);
    return data;
  }

  async create(resource: string, params: CreateParams) {
    const { data } = await axios.post(
      `${this.apiUrl}/${resource}`,
      params.data
    );
    return { data };
  }

  async update(resource: string, params: UpdateParams) {
    const { data } = await axios.patch(
      `${this.apiUrl}/${resource}/${params.id}`,
      params.data
    );
    return data;
  }

  async updateMany(resource: string, params: UpdateManyParams) {
    const responses = await Promise.all(
      params.ids.map((id) =>
        axios.patch(`${this.apiUrl}/${resource}/${id}`, params.data)
      )
    );
    return { data: responses.map((res) => res.data.id) };
  }

  async delete(resource: string, params: DeleteParams) {
    const { data } = await axios.delete(
      `${this.apiUrl}/${resource}/${params.id}`
    );
    return data;
  }

  async deleteMany(resource: string, params: DeleteManyParams) {
    const resources = await Promise.all(
      params.ids.map((id) => axios.delete(`${this.apiUrl}/${resource}/${id}`))
    );
    return { data: params.ids };
  }
}

const dataProvider = new CustomDataProvoder(AppConfig.ApiBaseUrl);

export default dataProvider;
