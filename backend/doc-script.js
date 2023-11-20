/* textarea 전역 실행 */
const tx = document.querySelectorAll("textarea");
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight + 10) + "px;overflow-y:hidden;");
}


/* operation 섹션 fold 적용 */
const opSec = document.querySelectorAll(".operation > .title");
for (let i = 0; i < opSec.length; i++) {
    opSec[i].addEventListener('click', (e)=>{
        if(e.currentTarget.parentNode.className.indexOf('folded')>-1){
            e.currentTarget.parentNode.classList.remove('folded')
            e.currentTarget.querySelector('.fold-toggle').classList.remove('fa-chevron-down')
            e.currentTarget.querySelector('.fold-toggle').classList.add('fa-chevron-up')
        }else{
            e.currentTarget.parentNode.classList.add('folded')
            e.currentTarget.querySelector('.fold-toggle').classList.add('fa-chevron-down')
            e.currentTarget.querySelector('.fold-toggle').classList.remove('fa-chevron-up')
        }
    })
}