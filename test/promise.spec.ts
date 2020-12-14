import MPromise from "./promise";

describe("Promise", function () {
  describe("promise test", () => {
    // it("1", function () {
    //   new MPromise((r) => {
    //     let f = MPromise.resolve().then((v) => {
    //       console.log("test2");
    //     });
    //     r(f);
    //   }).then(() => {
    //     console.log("resolve");
    //   });

    //   MPromise.resolve()
    //     .then(() => {
    //       console.log("ss1");
    //     })
    //     .then(() => {
    //       console.log("ss2");
    //     })
    //     .then(() => {
    //       console.log("ss3");
    //     });
    //   expect(1).toEqual("bean created");
    // });

    it("2", function () {
      new MPromise((resolve) => {
        let resolvedPromise = MPromise.resolve();
        resolve(resolvedPromise);
      }).then(() => {
        console.log("resolvePromise resolved");
      });

      MPromise.resolve()
        .then(() => {
          console.log("promise1");
        })

        .then(() => {
          console.log("promise2");
        })

        .then(() => {
          console.log("promise3");
        });
      expect(1).toEqual("bean created");
    });
  });
});
