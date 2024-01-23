import { format } from "date-fns";
import { es } from "date-fns/locale";

const dateFormatAdapter = () => {
  const dateFormat = (date: Date, frmt: string) => {
    return format(date, frmt, { locale: es });
  };
  return {
    dateFormat,
  };
};

export default dateFormatAdapter;
