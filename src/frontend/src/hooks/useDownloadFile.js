export const useDownloadReport = (reportName, downloadFn) => async () => {
  const fileBlob = await downloadFn();
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(fileBlob);
  link.download = `${reportName}.pdf`;
  link.click();
};
