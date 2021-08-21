import * as React from "react";
import styles from "./HelloWorld.module.scss";
import * as strings from "HelloWorldWebPartStrings";
import DeepNestetedComponent from "./DeepNestetedComponent";
import SpfxContextWrapper from "./ContextWrapper.tsx";


const HelloWorld = ({spfxContext}) => {
 

  return (
    <SpfxContextWrapper value={spfxContext}>
      <div className={styles.helloWorld}>
        <div className={styles.container}>
            <DeepNestetedComponent />
        </div>
      </div>
    </SpfxContextWrapper>
  );
};
export default HelloWorld;
