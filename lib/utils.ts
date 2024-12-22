export const validateString = (value: unknown, maxLength: number) => {
    if(!value || typeof value !== "string" || value.length > maxLength) {
      return false;
      } 
      return true;
    } // this function checks if the value is a string and if it is not empty (not null)

export const getErrorMessage = (error: unknown): string => {
    let message: string;
    
    if (error instanceof Error) { 
        message =  error.message;
        } else if (error && typeof error === 'object' && 'message' in error) { {/* error is an object means it is not a traditional error instance, but we still handle it */}
            message = String(error.message);
        } else if (typeof error === 'string') {
            message = error;
        } else {
            message = "Something went wrong";
        }
    
        return message;
        };