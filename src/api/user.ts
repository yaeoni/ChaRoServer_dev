import express from 'express';
import { check } from 'express-validator';
const router = express.Router();

import { loginController, registerController } from '../controller';

/**
 *  @route POST /user/register
 *  @desc 일반 회원가입
 *  @access Public <- Private설정을 따로 할 수 있는가?
 */
router.post('/register', registerController.register);

/**
 *  @route POST /user/register/email
 *  @desc 이메일 중복 체크
 *  @access Public <- Private설정을 따로 할 수 있는가?
 */
router.post('/register/email', registerController.checkEmail);

/**
 *  @route POST /user/register/nickname
 *  @desc 닉네임 중복 체크
 *  @access Public <- Private설정을 따로 할 수 있는가?
 */
router.post('/register/nickname', registerController.checkNickname);

/**
 *  @route POST /user/login
 *  @desc 일반 로그인
 *  @access Public <- Private설정을 따로 할 수 있는가?
 */
router.post('/login', [
  check('email', '이메일을 입력해주세요.').exists(),
  check('password', 'Password를 입력해주세요.').exists(),
  loginController.login,
]);

/**
 *  @route GET /user/login/google
 *  @desc 구글 소셜 로그인 -> 클라딴에서 해당 URL로 redirect시켜줘야함
 *  @access Public
 */
router.get('/login/google', function (req, res) {
  res.redirect(loginController.googleURL);
});

/**
 *  @route GET /user/login/google/callback
 *  @desc 구글 소셜 로그인 결과 반환(유저 정보 반환)
 *  @access Public
 */
router.get('/login/google/callback', loginController.googleLogin);

/**
 *  @route GET /user/login/kakao
 *  @desc 카카오 소셜 로그인 -> 클라딴에서 해당 URL로 redirect시켜줘야함
 *  @access Public
 */
router.get('/login/kakao', function (req, res) {
  res.redirect(loginController.kakaoURL);
});

/**
 *  @route GET /user/login/kakao/callback
 *  @desc 카카오 소셜 로그인 결과 반환(유저 정보 반환)
 *  @access Public
 */
router.get('/login/kakao/callback', loginController.kakaoLogin);

export default router;
