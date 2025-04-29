document.addEventListener('DOMContentLoaded', function() {
    // Certificate Upload
    setupFileUpload('certificateUpload', 'certificateInput', 'certificatePreview', 5); // 5MB limit
    
    // Project Upload
    setupFileUpload('projectUpload', 'projectInput', 'projectPreview', 10); // 10MB limit
    
    function setupFileUpload(uploadAreaId, inputId, previewId, maxSizeMB) {
        const uploadArea = document.getElementById(uploadAreaId);
        const fileInput = document.getElementById(inputId);
        const filePreview = document.getElementById(previewId);
        
        if (!uploadArea || !fileInput || !filePreview) return;
        
        // Click on upload area to trigger file input
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Handle file selection
        fileInput.addEventListener('change', function() {
            handleFiles(this.files);
        });
        
        // Drag and drop functionality
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--primary-color)';
            uploadArea.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
        });
        
        uploadArea.addEventListener('dragleave', function() {
            uploadArea.style.borderColor = 'var(--border-color)';
            uploadArea.style.backgroundColor = 'transparent';
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--border-color)';
            uploadArea.style.backgroundColor = 'transparent';
            
            if (e.dataTransfer.files.length) {
                handleFiles(e.dataTransfer.files);
            }
        });
        
        // Handle the selected files
        function handleFiles(files) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                
                // Check file size
                if (file.size > maxSizeMB * 1024 * 1024) {
                    alert(`File size exceeds ${maxSizeMB}MB limit`);
                    continue;
                }
                
                // Create file preview element
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                
                // Create preview based on file type
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    fileItem.appendChild(img);
                } else {
                    const fileTypeIcon = document.createElement('div');
                    fileTypeIcon.className = 'file-type-icon';
                    fileTypeIcon.style.height = '100px';
                    fileTypeIcon.style.display = 'flex';
                    fileTypeIcon.style.alignItems = 'center';
                    fileTypeIcon.style.justifyContent = 'center';
                    fileTypeIcon.style.backgroundColor = 'var(--light-bg-color)';
                    
                    const extension = file.name.split('.').pop().toUpperCase();
                    fileTypeIcon.innerHTML = `<span style="font-size: 1.5rem; font-weight: bold;">${extension}</span>`;
                    
                    fileItem.appendChild(fileTypeIcon);
                }
                
                // File info
                const fileInfo = document.createElement('div');
                fileInfo.className = 'file-info';
                
                const fileName = document.createElement('div');
                fileName.className = 'file-name';
                fileName.textContent = file.name;
                
                const fileSize = document.createElement('div');
                fileSize.className = 'file-size';
                fileSize.textContent = formatFileSize(file.size);
                
                fileInfo.appendChild(fileName);
                fileInfo.appendChild(fileSize);
                
                // Remove button
                const removeBtn = document.createElement('div');
                removeBtn.className = 'remove-file';
                removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                removeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    fileItem.remove();
                });
                
                fileItem.appendChild(fileInfo);
                fileItem.appendChild(removeBtn);
                
                // Add to preview area
                filePreview.appendChild(fileItem);
            }
        }
        
        // Format file size
        function formatFileSize(bytes) {
            if (bytes < 1024) return bytes + ' B';
            else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
            else return (bytes / 1048576).toFixed(2) + ' MB';
        }
    }
});