## Shared secret all files on the repository

For this step create a repository. Make sure to push your secrets file into your repository, when I download your code and run your application, it should use that file to get all the secrets in order to make your application function. Did the file get copied? Once it's copied did Github complained about it?

Yes, the file did copied. The reason why it was copied because the dotenv file was not in the .gitignore file. If the title for the dotenv file ".env" was inside of the .gitignore file, it would have never been copied or pushed to the repository.

After pushing the files up to the main repository, I refeshed the page to see if it had been pushed, and it was successfully. Currently, github is not complaining about it.
