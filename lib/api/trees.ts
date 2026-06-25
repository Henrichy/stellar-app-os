import { getMockTreesResponse } from '@/lib/api/mock/trees';
import type { TreeFilterState, TreesResponse } from '@/lib/types/tree';

export async function fetchTrees(filters: TreeFilterState): Promise<TreesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return getMockTreesResponse(filters);
}

export function fetchPublicTrees(filters: TreeFilterState): Promise<TreesResponse> {
  return fetchTrees(filters);
}
