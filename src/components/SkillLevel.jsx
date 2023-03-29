function SkillLevel(props) {
  return (
    <>
      <div className="flex items-center gap-1 md:p-4  justify-center ">
        <span className="w-1/4 flex justify-end flex-col items-center text-red-500 italic font-bold">
          {props.icon}
          {props.skill}
        </span>
        <div className="relative bg-gray-400 w-2/3 h-2">
          <div className={`absolute bg-red-500 w-${props.fraction} h-2`}></div>
        </div>
      </div>
    </>
  );
}

export default SkillLevel;
