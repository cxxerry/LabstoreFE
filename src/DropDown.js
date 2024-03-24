// import React, { useState, useEffect } from "react";

// function Dropdown() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (isOpen && !event.target.closest(".dropdown")) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [isOpen]);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <button onClick={handleToggle}>드롭다운 토글</button>
//       {isOpen && (
//         <ul>
//           <li>마이페이지</li>
//           <li>로그아웃</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Dropdown;
function Dropdown() {

  return (
    <>
      <li>학생 · 사무용 노트북</li>
      <li>개발자 노트북</li>
      <li>건축 · 디자인 노트북</li>
    </>
  );
}

export default Dropdown;