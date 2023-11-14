import { createContext } from "react";
import kubaPng from "../assets/kubus.jpg";
import rafalPng from "../assets/rafal.jpg";
const PostContext = createContext([
  {
    id: "1",
    author: "dundunek1",
    authorImg: kubaPng,
    postTitle: "Dlaczego uwielbiam ćwiczyć o 8.00 rano",
    postContent:
      "WSiZ jako jedna z najlepszych uczelni w Polsce oferuje atrakcyjną jakoś kształcenia pod względem Wychowania Fizycznego, umożliwiając studentom rozwinięcie swoich zdolności fizycznych jak np chodzenie na czworaka.",
    likes: 1000,
    comments: ["Kocham Wsiz"],
    postType: "colorful",
    icons: [],
  },
  {
    id: "2",
    author: "rafalstawarz69",
    authorImg: rafalPng,
    postTitle: "Frekwencja to moje drugie imię",
    postContent: "Jestem bardzo punktualnym studentem, polecam również Tobie.",
    likes: 578,
    comments: ["Kocham Wsiz"],
    postType: "default",
  },
]);
export default PostContext;
//
