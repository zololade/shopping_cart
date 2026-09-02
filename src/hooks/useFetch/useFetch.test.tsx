import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useFetch } from "./useFetch"; // adjust path

describe("useFetch", () => {
  beforeEach(() => {
    vi.restoreAllMocks(); // Clear mocks before each test
  });

  it("should handle a successful fetch request", async () => {
    const mockData = [{ id: 1, name: "Product A" }];

    // Mock successful fetch response
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response);

    const { result } = renderHook(() => useFetch("/api/products"));

    // 1. Initial State Check
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    // 2. Wait for async actions to resolve
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // 3. Final State Check
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it("should handle a failed HTTP fetch request", async () => {
    // Mock an HTTP error response (e.g., 404)
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 404,
    } as Response);

    const { result } = renderHook(() => useFetch("/api/products"));

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe("HTTP error: Status 404");
  });

  it("should abort the fetch request on unmount", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementationOnce(
      () => new Promise(() => {}), // Infinite promise so it stays loading
    );

    const { unmount } = renderHook(() => useFetch("/api/products"));

    // Unmount the hook immediately mid-flight
    unmount();

    // Verify that the fetch signal was passed and triggered an abort
    const fetchArgs = fetchSpy.mock.calls[0][1];
    expect(fetchArgs?.signal?.aborted).toBe(true);
  });
});
