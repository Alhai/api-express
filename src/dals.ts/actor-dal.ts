// const mongoose = require('mongoose')

import { Model } from "mongoose";
import { Actor } from "../schema/actor-schema";

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect();

// }

  async function createActor(){
    const db = new Actor({
      name : String
    })
  
    await db.save 
  }



