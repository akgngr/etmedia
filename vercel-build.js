// vercel-build.js

const fs = require("fs");
const { execSync } = require("child_process");

// Fonksiyon: Klasör izinlerini ayarla (örneğin, 755)
const setFolderPermissions = (folderPath, permissions) => {
    try {
        fs.chmodSync(folderPath, permissions);
        console.log(`Permissions set for ${folderPath}`);
    } catch (error) {
        console.error(
            `Error setting permissions for ${folderPath}: ${error.message}`
        );
    }
};

// Örnek: bootstrap/cache klasörü için izinleri ayarla
const bootstrapCachePath = "bootstrap/cache";
setFolderPermissions(bootstrapCachePath, 0o755);

// Diğer işlemleri buraya ekleyebilirsiniz...
