export const parcelPerfectService = {
  quote(payload) {
    return {
      ok: true,
      provider: 'ParcelPerfect',
      estimatedCost: 145.5,
      ...payload
    };
  },
  placeLookup(query) {
    if (!query) return [];
    return [
      { id: 'place_1', name: `${query} Central` },
      { id: 'place_2', name: `${query} North` }
    ];
  }
};
