const data = [
  {
    city: "My Location",
    temperature: 63,
    state: "Clear",
    time: "11:31 PM",
    color: "from-slate-900 to-slate-700",
  },
  {
    city: "New York",
    temperature: 52,
    state: "Clear",
    time: "12:23 AM",
    color: "from-gray-800 to-gray-500",
  },
  {
    city: "London",
    temperature: 44,
    state: "Rainy",
    time: "12:23 PM",
    color: "from-blue-700 to-sky-500",
  },
  {
    city: "Cairo",
    temperature: 89,
    state: "Sunny",
    time: "12:23 PM",
    color: "from-blue-600 to-sky-300",
  },
];

const WeatherList = () => {
  return (
    <div className="my-8 flex flex-col gap-2">
      {data.map((item) => (
        <div
          key={item.city}
          className={`flex justify-between rounded-3xl bg-gradient-to-br p-4 text-white md:px-8
          ${item.color}
        `}
        >
          <div>
            <p className="m-0 text-xl font-bold leading-tight">{item.city}</p>
            <p className="m-0 mb-5 text-sm font-medium leading-tight opacity-75">
              {item.time}
            </p>
            <p className="mb-0 mt-auto text-sm font-medium">{item.state}</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="m-0 text-5xl">{item.temperature}°</p>
            <p className="mb-0 mt-auto text-sm font-medium opacity-75">
              H:{item.temperature + 7}° L:{item.temperature - 7}°
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
