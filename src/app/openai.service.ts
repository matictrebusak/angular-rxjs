import { Injectable } from '@angular/core';
import OpenAI from "openai";
import { environment } from 'src/environments/environment';



const openai = new OpenAI({
  apiKey: environment.OPEN_AI_API_KEY,
});

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  

  constructor() { }

  async init() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    })

    console.log(chatCompletion);
  }
}
