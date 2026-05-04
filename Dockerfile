# 1. 빌드 스테이지
FROM node:20-alpine AS builder
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 전체 소스 복사 및 Vite 빌드 실행
COPY . .
RUN npm run build

# 2. 실행 스테이지 (Nginx)
FROM nginx:alpine

# 빌드된 정적 파일들을 Nginx의 서빙 폴더로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 커스텀 Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run 기본 포트인 8080 사용
EXPOSE 8080

# Nginx 백그라운드 실행 해제 (컨테이너 유지)
CMD ["nginx", "-g", "daemon off;"]
