import Mock from "mockjs";
import HomeData from "./saveData/HomeData";
import userForm from "./saveData/userForm";

Mock.mock("/home/getData", HomeData.getData());
Mock.mock("/user/getUserFormData", userForm.getFormData());
