class CongratsReporter {
  onRunComplete(_, results) {
    const groups = {
      containerBasic: [],
      gridArea: [],
      webpage: [],
    };

    for (const testResult of results.testResults) {
      const filePath = testResult.testFilePath.toLowerCase();

      if (filePath.includes("container-basic.test.js")) {
        groups.containerBasic.push(testResult);
      } else if (filePath.includes("itemsproperties.test.js")) {
        groups.gridArea.push(testResult);
      }
    }

    for (const [groupName, tests] of Object.entries(groups)) {
      const allPassed = tests.every((t) => t.numFailingTests === 0);
      if (tests.length > 0 && allPassed) {
        console.log(
          `\n\x1b[32m🎉 Congratulations! Well done for finishing all tests and tasks in: ${groupName}🎉\x1b[0m\n`
        );
      }
    }
  }
}

module.exports = CongratsReporter;
