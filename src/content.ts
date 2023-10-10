namespace App {
  console.log('content script loaded');
  // body는 일반적으로 null이 될 수 없기 때문에 !를 붙임
  document.querySelector('body')!.style.backgroundColor = 'Orange';
}
