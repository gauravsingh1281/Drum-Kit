let noOfDrumBtn = document.querySelectorAll(".drum").length;
const handleClick = () => {
  alert("hello world");
};

for (let i = 0; i < noOfDrumBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
