export const validateString = (value: unknown, maxLength: number) => {
    if(!value || typeof value !== "string" || value.length > maxLength) {
      return false;
      } 
      return true;
    } // this function checks if the value is a string and if it is not empty (not null)