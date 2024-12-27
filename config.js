import dotenv from 'dotenv';
dotenv.config();

export const {
    ACCESS_TOKEN_BANKING = 'Crear variable de entorno ACCESS_TOKEN_BANKING',
    REFRESH_TOKEN_BANKING = 'Crear variable de entorno REFRESH_TOKEN_BANKING',
    EXPIRED_TOKEN = 'Crear variable de entorno EXPIRED_TOKEN',
    AWS_CLIENT_ID = 'Crear variable AWS_CLIENT_ID',
    ACCESS_TOKEN_MOBILE = 'Crear variable de entorno ACCESS_TOKEN_MOBILE',
    URL_TELERED = 'Crear variable de entorno URL_TELERED',
    URL_YAPPY_BANKING = 'Crear variable de entorno URL_YAPPY_BANKING',
    URL_YAPPY_MOBILE = 'Crear variable de entorno URL_YAPPY_MOBILE',
    COGNITO_ID = 'Crear variable de entorno COGNITO_ID',
    OTP = 'Crear variable de entorno OTP',
} = process.env