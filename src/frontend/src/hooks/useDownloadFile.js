export const useDownloadReport = (reportName, downloadFn, ...args) => async () => {
  const fileBlob = await downloadFn(...args);
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(fileBlob);
  link.download = `${reportName}.pdf`;
  link.click();
};
