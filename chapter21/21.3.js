let preOrder = [27, 16, 9, 12, 54, 36, 72];
let inOrder = [9, 12, 16, 27, 36, 54, 72];

// 트리 배열을 잘라서 반환하는 함수
// 재귀 안에서는 내장 메서드를 썼다.
const orderSlice = (v, a, b) => {
  return v.slice(a, b);
};

// 후위 순회 출력 함수
const printPostOrder = (preorder, inorder) => {
  // 전체 길이
  const N = preorder.length;
  // 기저 사례: 빈 트리면 종료
  if (preorder.length == 0) return;
  // 전위 순위 맨 앞 노드가 루트임
  const root = preorder[0];
  // 왼쪽 서브트리 크기 = 루트 인덱스번호
  // 중위 탐색 결과에서 루트의 위치를 찾아서 알 수 있다.
  const L = inorder.findIndex(value => value == root);
  // 오른쪽 서브트리 크기
  // 루트와 왼쪽 서브트리 크기를 전체크기에서 뺀다.
  const R = N - 1 - L;
  // 노드가 하나 남을때까지 후위 순회 재귀 호출한다.
  // 왼쪽 전위순회 서브트리는 전위 탐색결과에서 루트 제외한 왼쪽 서브트리 크기만큼
  // 왼쪽 중위순회 서브트리는 전위 탐색결과에서 처음부터 루트 전까지
  printPostOrder(preorder.slice(1, L + 1), inorder.slice(0, L));
  // 오른쪽 전위순회와 중위순회 서브트리는 둘다 동일하게 왼쪽 + 루트 크기를 제외한 나머지
  printPostOrder(preorder.slice(L + 1, N), inorder.slice(L + 1, N));
  // 루트 노드를 제일 마지막에 출력
  // 기저 사례까지 갔다 왔으면 출력
  console.log(root, ' ')
}

printPostOrder(preOrder, inOrder);