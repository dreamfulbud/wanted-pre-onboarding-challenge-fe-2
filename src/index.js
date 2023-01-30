/**
 * @file 원티드 프리온보딩 프론트엔드 챌린지 2차
 * @author Hyejin Kang <dreamfulbud@naver.com>
 * @see {@link https://github.com/areumsheep/wanted-pre-onboarding-challenge-fe-2}
 */

/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id 아이디(required)
 * @property {string} content 내용(required)
 * @property {boolean} completed 완료여부(required)
 * @property {string} category 카테고리(required)
 * @property {array<{id:number, tag: string}>} tags 태그들(optional)
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [
  {
    id: 1,
    content: "",
    completed: false,
    category: "",
    tags: [{ id: 1, tag: "" }],
  },
];

/**
 * Create: 할 일을 추가할 수 있다. 내용없이 추가할 수 없다.
 * @param {string} content
 * @param {string} category 카테고리(required)
 * @param {Array} tags 태그들(optional)
 * @throws 내용이 없을 경우 alert(내용을 입력해주세요) 발생
 * @returns {Object} todos
 */
function createTodo(content, category, tags) {}

/**
 * Read: 모든 할 일을 조회할 수 있다.
 * @returns {Array} todos
 */
function getTodos() {}

/**
 * Read: ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id
 * @returns {Object} todos item
 */
function getTodo(id) {}

/**
 * Update: ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {number} id
 * @returns {Array} todos
 */
function updateTodo(id) {}

/**
 * Update: 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} id
 * @param {number} tagId
 * @returns {Array} todos
 */
function updateTodoTag(id, tagId) {}

/**
 * Delete: ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id
 * @returns {Array} todos
 */
function deleteTodo(id) {}

/**
 * Delete: 모든 할 일을 제거할 수 있다.
 * @returns {Array} todos
 */
function deleteAllTodos() {}

/**
 * Delete: 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} id
 * @param {number} tagId
 * @returns {Array} todos
 */
function deleteTodoTag(id, tagId) {}

/**
 * Delete: 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id
 * @returns {Array} todos
 */
function deleteTodoAllTags(id) {}
