import { Actor } from '../schema/actor-schema';

export async function createActor(actorData: any): Promise<any> {
  try {
    const actor = new Actor(actorData);
    const savedActor = await actor.save();
    return savedActor;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create actor');
  }
}

export async function getActors(): Promise<any> {
  try {
    const actors = await Actor.find();
    return actors;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get actors');
  }
}

export async function getActorById():Promise<any>{
  try {
    // const id = Number(req.params.p)
    Actor.findOne({_id: Actor})
  } catch (error) {
    
  }
}

export async function deleteActor(_id : any): Promise<any> {
  try {
    const actor = new Actor(_id);
    return 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get actors');
  }
}

