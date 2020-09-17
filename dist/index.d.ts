declare type FileData = {
    fileName: string;
    extension: string;
    contentType: string;
};
export declare const downloadAUrl: (fileUrl: string, fileInfo: FileData, accessToken: String) => Promise<void>;
export declare const downloadABlob: (fileContent: Blob | Uint8Array, fileInfo: FileData) => void;
export {};
