/**
 * Metadata of a single artifact file or directory
 */
export interface FileInfo {
  path: string; // Path relative to the root artifact directory run
  is_dir: boolean; // Whether the path is a directory
  file_size: number; // Size in bytes. Unset for directories
}
