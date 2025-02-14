import { memo } from "react";
import { SparklesCore } from "./ui/sparkles";

function Spark(){
    return (<div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        
      </div>)
}

export default memo(Spark);