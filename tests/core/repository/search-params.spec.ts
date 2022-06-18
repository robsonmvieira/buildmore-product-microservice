import {SearchParams, SearchResult} from '../../../src/core/repository/base.repository'
describe('SearchParams Unit Tests', () => {
  it('should create a new Search Param', () => {
    let searchParams = new SearchParams();
    expect(searchParams.page).toBe(1)

    const arrange = [
      { page: null, expected: 1 },
      { page: 1, expected: 1 },
      { page: 2, expected: 2 },
      { page: -1, expected: 1 },
      { page: true, expected: 1 },
      { page: undefined, expected: 1 },

    ]

    arrange.forEach(e => {
      searchParams = new SearchParams({ page: e.page } as any);
      expect(searchParams.page).toBe(e.expected);
    })
  });

  it('should create a new Search Param with per_page itens when is passed', () => {
    let searchParams = new SearchParams();
    expect(searchParams.per_page).toBe(15)

    const arrange = [
      { per_page: null, expected: 15 },
      { per_page: 1, expected: 1 },
      { per_page: 2, expected: 2 },
      { per_page: -1, expected: 15 },
      { per_page: true, expected: 15 },
      { per_page: undefined, expected: 15 },
      { per_page: 'fake', expected: 15 },

    ]

    arrange.forEach(e => {
      searchParams = new SearchParams({ per_page: e.per_page } as any);
      expect(searchParams.per_page).toBe(e.expected);
    })
  });

  it('should create a new Search Param with sort itens when is passed', () => {
    let searchParams = new SearchParams();
    expect(searchParams.sort).toBeNull()

    const arrange = [
      { sort: null, expected: null },
      { sort: undefined, expected: null },
      { sort: '', expected: null },
      { sort: 2, expected: '2' },
      { sort: -1, expected: '-1' },
      { sort: true, expected: 'true' },
      { sort: 'fake', expected: 'fake' }
    ]

    arrange.forEach(e => {
      searchParams = new SearchParams({ sort: e.sort } as any);
      expect(searchParams.sort).toBe(e.expected);
    })
  });

  it('should create a new Search Param with sort_dir itens when is passed', () => {
    let searchParams = new SearchParams();
    expect(searchParams.sort_dir).toBeNull()

    searchParams = new SearchParams({sort: null} as any);
    expect(searchParams.sort_dir).toBeNull()

    searchParams = new SearchParams({sort: undefined} as any);
    expect(searchParams.sort_dir).toBeNull()

    searchParams = new SearchParams({sort: ''} as any);
    expect(searchParams.sort_dir).toBeNull()

    const arrange = [
      { sort_dir: null, expected: 'asc' },
      { sort_dir: undefined, expected: 'asc' },
      { sort_dir: '', expected: 'asc' },
      { sort_dir: 2, expected: 'asc' },
      { sort_dir: 'desc', expected: 'desc' },
      { sort_dir: true, expected: 'asc' },
      { sort_dir: 'fake', expected: 'asc' }
    ]
 
    arrange.forEach(e => {
      searchParams = new SearchParams({ sort: 'field', sort_dir: e.sort_dir } as any);
      expect(searchParams.sort_dir).toBe(e.expected);
    })
  });


  it('should create a new Search Param with filter itens when is passed', () => {
    let searchParams = new SearchParams();
    expect(searchParams.filter).toBeNull()
    const arrange = [
      { filter: null, expected: null },
      { filter: undefined, expected: null },
      { filter: '', expected: null },
      { filter: 2, expected: '2' },
      { filter: 'desc', expected: 'desc' },
      { filter: true, expected: 'true' },
      { filter: 'fake', expected: 'fake' }
    ]
 
    arrange.forEach(e => {
      searchParams = new SearchParams({ filter: e.filter } as any);
      expect(searchParams.filter).toBe(e.expected);
    })
  });
});

describe('SearchParams Unit Tests', () => {
  test('Constructor Props', () => {
    const result = new SearchResult({
      items: ["entity 1", "entity 2"] as any,
      total: 4,
      current_page: 1,
      per_page: 2,
      sort: null,
      sort_dir: null,
      filter: null
    })

    expect(result.toJSON()).toStrictEqual({
      items: ["entity 1", "entity 2"] as any,
      total: 4,
      current_page: 1,
      per_page: 2,
      sort: null,
      sort_dir: null,
      filter: null,
      last_page: 2
    })
  });

  it('should set last page with 1 when total is less than per_page', () => {
    let result = new SearchResult({
      items: ["entity 1", "entity 2"] as any,
      total: 4,
      current_page: 1,
      per_page: 20,
      sort: null,
      sort_dir: null,
      filter: null
    })
    expect(result.last_page).toBe(1)

    result = new SearchResult({
      items: ["entity 1", "entity 2"] as any,
      total: 121,
      current_page: 1,
      per_page: 20,
      sort: null,
      sort_dir: null,
      filter: null
    })
    expect(result.last_page).toBe(7)

  })
})