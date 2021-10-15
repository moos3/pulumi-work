import * as pulumi from "@pulumi/pulumi";
import { Input, Output } from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"

interface S3Bucket2Args {
  acl?: Input<string>;
};

export class S3Bucket2 extends pulumi.ComponentResource {
    public readonly bucketId: Output<string>;
    public readonly bucket: aws.s3.Bucket

    constructor(name: string, args: S3Bucket2Args, opts?: pulumi.ComponentResourceOptions) {
        super("custom:x:S3Bucket2", name, args, opts);
        this.bucket = new aws.s3.Bucket(name+"2", {
          acl: args.acl
        }, {parent: this})

        this.bucketId = this.bucket.id
    }
  }