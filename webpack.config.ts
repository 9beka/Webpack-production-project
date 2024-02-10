import webpack  from "webpack"
import {BuildEnv, BuildPath} from "./config/build/types/config"
import path  from "path"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"


export default (env: BuildEnv) =>{
  const paths:BuildPath = {
    entry : path.resolve(__dirname , "src" , "index.tsx"),
    build :path.resolve(__dirname , "build"), 
    html :path.resolve(__dirname, "public" , "index.html") 
  }

  const mode= env.mode||"development"
  const PORT =3001

  const isDev = mode==="development" 
  
  
  const config:webpack.Configuration = buildWebpackConfig({
    mode:mode,
    paths ,
    isDev,
    port :PORT,
  })
  return config
}