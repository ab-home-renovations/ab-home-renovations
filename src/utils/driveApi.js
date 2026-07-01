const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;

function imageUrls(fileId) {
  return {
    src:   `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920`,
    thumb: `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`,
  };
}

export async function fetchFolderImages(folderId) {
  const q = encodeURIComponent(
    `'${folderId}' in parents and trashed=false and mimeType contains 'image/'`
  );
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&key=${API_KEY}&fields=files(id,name)&pageSize=100&orderBy=name`;
  const res = await fetch(url);
  const data = await res.json();
  return (data.files || []).map((f) => ({ id: f.id, ...imageUrls(f.id) }));
}

export async function fetchAllFolderImages(folderIds) {
  const results = await Promise.all(folderIds.map(fetchFolderImages));
  return results.flat();
}
