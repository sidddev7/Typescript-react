function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const arr1 = [1, 2, 3, 4];
const arr2 = ["1", "2", "3", "4"];
getFirstElement(arr1);
getFirstElement(arr2);

type APIResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = APIResponse<{ name?: string; age?: number }>;
const userResponse: UserResponse = {
  data: {
    age: 23,
    name: "Siddhrajsinh",
  },
  isError: false,
};

type BlogResponse = APIResponse<{ title: string }>;
const blogResponse: BlogResponse = {
  data: {
    title: "",
  },
  isError: false,
};
