
document.addEventListener('DOMContentLoaded', function(){
  // slider
  const slides = document.querySelector('.slides');
  const total = document.querySelectorAll('.slide').length;
  let idx = 0;
  function go(i){ slides.style.transform = `translateX(-${i*100}%)`; idx = i; }
  document.querySelector('#next').addEventListener('click', ()=> go((idx+1)%total));
  document.querySelector('#prev').addEventListener('click', ()=> go((idx-1+total)%total));
  // auto
  setInterval(()=> go((idx+1)%total), 5000);
  // FAQ accordion
  document.querySelectorAll('.faq button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const content = btn.nextElementSibling;
      const open = content.style.display === 'block';
      document.querySelectorAll('.faq .content').forEach(c=> c.style.display='none');
      if(!open) content.style.display='block';
    });
  });
});
