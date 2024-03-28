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
