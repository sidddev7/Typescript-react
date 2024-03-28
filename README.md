## Typescript with react tutorials

### Remember one thing, use the interface when defining the data structure outside of the react component, and use types when defining the proptype, state types or any other in the react components


- Learn more at [Typescript React cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Using Typescript with Components

- Functional Component: -

  - We can design a functional component in same way as we do with JavaScript,
    the only difference is that we can give the type casting to the component
    Example: -

  ```javascript
  import React, { FC } from "react";

  const MyComponent: FC = () => {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  };

  export default MyComponent;
  ```

  - Now for passing props to this component, we can define the structure of the props using interface or types
    Example: -

  ```javascript
  import React, { FC } from "react";

  interface Props {
    name: string;
    age: number;
  }

  const MyComponent: FC<Props> = ({ name, age }) => {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>
      </div>
    );
  };

  export default MyComponent;
  ```

  <--- OR --->

  ```javascript
  import React, { FC } from "react";

  type Props = {
    name: string,
    age: number,
  };

  const MyComponent: FC<Props> = ({ name, age }) => {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>
      </div>
    );
  };

  export default MyComponent;
  ```

- For best practices, we can define the interfaces and types all at one place and use them when required with the same moduler concept of javascript

- ### Why Proptypes?

  - Using proptypes gives us better development and debugging experience in the IDE supported by typescript

  Example: -

  ```javascript
  import { Button } from "antd";
  import React from "react";

  type buttonProps = {
    text?: React.ReactNode,
    onClick?: () => void,
    className?: string,
    htmlType?: "submit" | "button" | "reset",
    type?: "default" | "primary" | "ghost" | "dashed" | "link" | "text",
    loading?: boolean,
    style?: React.CSSProperties,
    icon?: React.ReactNode,
  };

  function CommonButton(props: buttonProps) {
    const { text, onClick, className, htmlType, type, loading, style, icon } =
      props;
    return (
      <Button
        onClick={onClick}
        className={className}
        htmlType={htmlType}
        type={type}
        loading={loading}
        style={style}
        icon={icon}
      >
        {text}
      </Button>
    );
  }

  export const App = () => <CommonButton />; // here you will get props suggestions for CommonButton as shown here https://prnt.sc/8gKxsIK29dBR
  ```

- ## Using typescript with Hooks

  - ### useState
    As we already know that usestate is a hook to manage and manipulate the state of the component. With typescript, we can add make it more error proof and bug proof by stating the type of data it can poses

  Example:

  ```javascript
  import React, { FC, useState } from "react";

  interface Props {
    name: string;
  }

  const MyComponent: FC<Props> = ({ name }) => {
    const [count, setCount] =
      (useState < number) | string | boolean | (any > 0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    );
  };

  export default MyComponent;
  ```

  - We can also define the interfaces or types as a state Type

  Example:

  ```javascript
  import React, { FC, useState } from "react";

  interface Props {
    name: string;
  }
  interface Count {
    count: number;
  }
  const MyComponent: FC<Props> = ({ name }) => {
    const [count, setCount] = useState < Count > { count: 0 };

    const incrementCount = () => {
      setCount({ count: count.count + 1 });
    };

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Count: {count.count}</p>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    );
  };

  export default MyComponent;
  ```
  ## Types
  - Learn [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) for Typescripts
  ```javascript
  import { ModalProps } from "antd";

    type Questions = {
      __typeName: string;
      id: number;
      question: string;
    };
    type Company = {
      __typeName: string;
      name: string;
    };
    type LocationSchema = {
      __typeName: string;
      title: string;
      company: Company;
    };
    /**
     * - This is the Data type for `getWebChatWidget` query defined in `query.ts`
     */
    export type ChatWidgetInformation = {
      __typeName: string;
      id: number;
      widgetUid: string;
      locationId: number;
      initialText: string;
      isPhoneRequired: boolean;
      switchToSmsInd: boolean;
      presetQuestionInd: boolean;
      isActive: boolean;
      webChatWidgetQuestion: Questions[];
      location: LocationSchema;
    };
    /**
     * - this is the Datatype for the Navigation Step Handler function
     */
    export type StepData = { step: number; question: string };
    
    export type SetStepData = SetStateType<StepData>;
    
    export type WelcomeSectionData = {
      companyInformation: Partial<ChatWidgetInformation>;
      setStepData: SetStepData;
      stepData: StepData;
    };
    export type Message = {
      message: string;
      date: string;
      direction: "OUTGOING" | "INCOMING";
      type: "SMS" | "MMS";
    };
    export type MiscTypes = Partial<{
      phoneModal: boolean;
    }>;
    export type SetMiscTypes = React.Dispatch<React.SetStateAction<MiscTypes>>;
    export type AddPhonePayloadType = {
      phoneNumber: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    /**
     * - Extending the `AddPhonePayloadType` because LeadDataType will contain this basic information
     * - And making it Optional (`Partial`) as the lead information can be empty on stsrt phase
     */
    export type LeadDataType = Partial<{} & AddPhonePayloadType>;
    /**
     * - This is a generic type implementation for React setState function, accepting the input type `<T>`
     * - Returing the setState type for that respective type `React.Dispatch<React.SetStateAction<T>>`
     */
    type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;
    export type WidgetContextType = {
      messages: Message[];
      setmessages: SetStateType<Message[]>;
      widgetVisible: boolean;
      setwidgetVisible: SetStateType<boolean>;
      companyInformation: Partial<ChatWidgetInformation>;
      setcompanyInformation: SetStateType<Partial<ChatWidgetInformation>>;
      misc: MiscTypes;
      setmisc: SetMiscTypes;
      leadInformation: LeadDataType;
      setleadInformation: SetStateType<LeadDataType>;
    };
    /**
     * - We can also extend the library types or interfaces like this
     */
    export type ModalPropTypes = {
      children?: React.ReactElement<React.ReactElement> | string | undefined;
      open: boolean;
      onClose: () => void;
      footer?: React.ReactElement<React.ReactElement> | null;
      title: React.ReactElement<React.ReactElement> | string;
    } & ModalProps;

```
