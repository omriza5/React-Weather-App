import useGlobalStorage from "use-global-storage";

const useStorage = useGlobalStorage({
  storageOptions: { name: "w-app" }
});

export { useStorage };
