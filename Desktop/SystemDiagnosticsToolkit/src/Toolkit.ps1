$functionFolders = @(
    "systemMonitoring",
    "userManagement",
    "networkTools",
    "security"
)

foreach ($folder in $functionFolders) {
    Get-ChildItem "$PSScriptRoot\$folder\*.ps1" | ForEach-Object {
        . $_.FullName
    }
}

Write-Host "SysAdmin Toolkit loaded. Use Get-Command to see available functions."
