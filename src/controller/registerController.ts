import express, { Request, Response } from 'express';
import config from '../config/config';

import { registerDTO } from '../interface/req/registerDTO';
import registerService from '../service/registerService';
const register = async function (req: Request, res: Response) {
  const { email, userId, password, profileImage, nickname, pushAgree, emailAgree } = req.body;

  const user: registerDTO = {
    email: email,
    Id: userId,
    password: password,
    profileImage: profileImage,
    nickname: nickname,
    marketingPush: pushAgree,
    marketingEmail: emailAgree,
  };

  const result = await registerService.normalRegister(user);

  res.status(result.status).json(result.data);
};

export default {
  register,
};
