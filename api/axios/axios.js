import axios from "axios";
import config from "../config/index";

//判断当前环境
const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseurl.dev
    : config.baseurl.pro;

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  //axios相关配置
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {},
    };
    return config;
  }
  //拦截器
  prevAxios(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        console.log(error);
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        console.log(response);
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * axios请求调用接口函数
   * @param {json格式，包含请求地址、请求类型等} options
   */
  request(options) {
    const instance = axios.create();
    const option = { ...this.getInsideConfig(), ...options };
    this.prevAxios(instance); //调用拦截器
    return instance(option);
  }
}

export default new HttpRequest(baseUrl);
