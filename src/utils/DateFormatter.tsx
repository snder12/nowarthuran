interface DateFormatterProps {
  date: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ date }) => {
  const formattedDate = new Intl.DateTimeFormat("id", {
    timeZone: "UTC",
    month: "long",
    year: "numeric",
    day: "numeric",
  }).format(new Date(date));

  return <div>{formattedDate}</div>;
};

export default DateFormatter;
