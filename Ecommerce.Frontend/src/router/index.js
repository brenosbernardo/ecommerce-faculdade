import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import CriarConta from '../views/CriarConta.vue';
import Homepage from '../views/Homepage.vue';
import ChatbotContent from '../views/ChatbotContent.vue';
import Faq from '../views/Faq.vue';
import Perfil from '../views/Perfil.vue';
import Ajuda from '../views/Ajuda.vue';
import Chatbot from '../views/Chatbot.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/criar-conta",
    name: "CriarConta",
    component: CriarConta
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Homepage
  },
  {
    path: "/chat-content",
    name: "ChatbotContent",
    component: ChatbotContent
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil
  },
  {
    path: "/ajuda",
    name: "Ajuda",
    component: Ajuda
  },
  {
    path: "/chat-bot",
    name: "Chatbot",
    component: Chatbot
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


