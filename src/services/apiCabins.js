import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id); //condition
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  console.log(newCabin);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(newCabin);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  //img
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName};`;

  //1. create cabin
  let query = supabase.from("cabins");
  //create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select(); //.single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  //2.upload img
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.log(`id ${data[0].id}`);
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.log(storageError);
    throw new Error("Cabins img could not be upload and cabin was not created");
  }
  //2 upload data
  return data;
}
