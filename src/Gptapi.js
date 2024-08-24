import React from 'react'
import OpenAI from "openai";
import { OPEN_AI } from './constants';

const openai = new OpenAI({
    apiKey: OPEN_AI, 
    dangerouslyAllowBrowser: true,
    // This is the default and can be omitted
  });

export default openai